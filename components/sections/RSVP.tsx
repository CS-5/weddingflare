import React, { FunctionComponent, useState } from "react";
import type { RSVP } from "../../types";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../input/Text";
import { BooleanInput } from "../input/Boolean";

const RSVPSection: FunctionComponent = () => {
  const formValues = useForm<RSVP>();
  const { register, handleSubmit, reset, watch } = formValues;
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
      <FormProvider {...formValues}>
        <form className="w-full max-w-lg inline-block" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-4 text-gray-700 text-base">
            <TextInput label="First Name" {...register("fName")} required />
            <TextInput label="Last Name" {...register("lName")} required />
            <BooleanInput
              choices={
                {
                  yes: "I will be there",
                  no: "I will not be there",
                } as {
                  [option in RSVP["attending"]]: string;
                }
              }
              name="attending"
              required
            />
            <TextInput
              label="# Attending"
              {...register("number")}
              min="1"
              type="number"
              // TODO: This code is pretty cursed, but hey it works
              required={watch("attending", "no") === "yes"}
              disabled={watch("attending", "no") === "no"}
            />
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
      </FormProvider>
    </div>
  );
};

export default RSVPSection;
