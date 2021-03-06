import { v4 as uuid } from "uuid";
import type { RSVP, APIResponse } from "../../types";

export const onRequestPost: PagesFunction<{
  WF_RSVP_RESPONSES: KVNamespace;
  WF_SHEETS_ENDPOINT: string;
}> = async ({ request, env }) => {
  if (!env.WF_SHEETS_ENDPOINT) {
    return response(
      {
        success: false,
        message: "WF_SHEETS_ENDPOINT is not defined in the environment",
      },
      500
    );
  }

  const rsvp: RSVP = await request.json();

  if (!rsvp) {
    return response(
      {
        success: false,
        message: "No RSVP data provided",
      },
      400
    );
  }

  try {
    rsvp.id = uuid();

    // RSVP > KV
    // TODO: After converting this project to CF Pages Functions, this check may not be required
    if (typeof env.WF_RSVP_RESPONSES !== "undefined")
      await addKVRSVP(env.WF_RSVP_RESPONSES, rsvp);

    // RSVP > Google Sheets
    if (env.WF_SHEETS_ENDPOINT) {
      const res = await addSheetRSVP(env.WF_SHEETS_ENDPOINT, rsvp);

      if (res.status !== 200) {
        return response(
          {
            success: false,
            message: "Failed to add RSVP to Google Sheets",
          },
          res.status
        );
      }
    }

    return response(
      { success: true, message: "RSVP Successful", result: rsvp },
      200
    );
  } catch (err) {
    if (err instanceof Error) {
      return response(
        {
          success: false,
          message: "Worker error",
          error: err,
        },
        500
      );
    }
  }

  return response(
    {
      success: false,
      message: "Unknown error",
    },
    500
  );
};

/**
 * Adds a new RSVP to the KV store
 * @param store The KVNamespace to add the RSVP to
 * @param rsvp The RSVP object to add to the KV store
 * @returns A promise that resolves when the RSVP is added to the KV store
 */
const addKVRSVP = async (store: KVNamespace, rsvp: RSVP): Promise<void> => {
  if (!rsvp.id) return;
  return await store.put(rsvp.id, JSON.stringify(rsvp));
};

/**
 * Adds a new RSVP to the Google Sheet. GAS boilerplate can be found
 * here: https://gist.github.com/CS-5/5db243cb25c26c903d2921ec68e66583
 * @param endpoint The Google AppsScript web API endpoint
 * @param rsvp The RSVP object to add to the Google Sheet
 * @returns A promise that resolves when the RSVP is added to the Google Sheet
 */
const addSheetRSVP = async (
  endpoint: string,
  rsvp: RSVP
): Promise<Response> => {
  rsvp.number = rsvp.number || 0;

  return await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${rsvp.fName} ${rsvp.lName}`,
      attending: String(rsvp.attending),
      number: String(rsvp.number),
    }),
  });
};

/**
 * Helper function to generate response message to return to the client. Helps standardize
 * communication and error logging between API and web frontend.
 * @param apiResponse A standardized response object, shared between the API and web frontend
 * @param status HTTP status code
 * @returns A standard HTTP Response object
 */
const response = (apiResponse: APIResponse, status: number): Response => {
  if (!apiResponse.success) console.error(apiResponse.error?.message);

  return new Response(JSON.stringify(apiResponse), {
    status: status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
