/* --------------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
  ------------------------------------------------------- */
import formatDateAndTime from "@/utils/formatDateAndTime";

export default function Field({ field, value, placeholder, format}) {
  return (
    <div className="flex font-bold mx-auto w-1/2 my-5">
        {field}: <div className="shadow-md w-full border-2 border-gray-300 mx-3 px-5 py-1 rounded-full">
          { value ? format ? formatDateAndTime(value): value : placeholder}
        </div>
    </div>
  );
}
