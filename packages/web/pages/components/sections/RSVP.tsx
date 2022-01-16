import React, { FunctionComponent, useState } from "react";
import { RSVP } from "@eventflare/lib";
import { useForm } from "react-hook-form";
import {
  EMAIL_FROM,
  EVENT_LOCAL_DATE,
  SITE_TITLE,
  EVENT_LOCATION,
  EVENT_LOCAL_TIME,
} from "../../../constants";
import Input from "../Input";

/*

This section is a RSVP form.

*/

interface RSVPForm extends Omit<RSVP, "number"> {
  number: string;
}

const RSVPSection: FunctionComponent = () => {
  const { register, handleSubmit, reset } = useForm<RSVPForm>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);

    const payload: RSVP = {
      ...data,
      number: parseInt(data.number),
    };

    // Set message if email was recorded in the form and if EMAIL_FROM was configured at build time
    if (EMAIL_FROM && data.email) {
      payload.message = {
        from: {
          name: SITE_TITLE,
          email: EMAIL_FROM,
        },
        subject: "C&T Wedding RSVP Confirmation!",
        body: `Hi ${data.fName}, 
        
Thanks for your RSVP! We are looking forward to having you join us!

As a reminder, the wedding is taking place at ${EVENT_LOCATION.address} (Google Maps driving directions: ${EVENT_LOCATION.url}). It will be held on ${EVENT_LOCAL_DATE} at ${EVENT_LOCAL_TIME}.`,
      };
    }

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((error) => {
      console.error(error);
    });

    if (res && res.ok) {
      console.log(JSON.stringify(await res.json(), null, 2));
    }

    setSubmitting(false);
    reset();
  });

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-lg inline-block" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-4 text-gray-700 text-base">
          <Input label="First Name" {...register("fName")} required />
          <Input label="Last Name" {...register("lName")} required />
          <Input
            label="# Attending"
            {...register("number")}
            min="1"
            type="number"
            required
          />
          {EMAIL_FROM && (
            <Input
              label="Email"
              {...register("email")}
              type="email"
              helperText="Optional, for calendar invite"
            />
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="w-full md:w-auto text-white transition duration-200 ease-in-out bg-theme-accent hover:bg-theme-primary shadow drop-shadow-lg py-2 px-6 rounded-2xl"
            type="submit"
          >
            {submitting ? "Submitting..." : "RSVP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RSVPSection;
