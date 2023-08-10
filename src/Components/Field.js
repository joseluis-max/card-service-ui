/* --------------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
  ------------------------------------------------------- */

export default function Field({ field, value = '--/--/-- --:--:-- '}) {
  return (
    <div className="flex mx-auto w-1/2 my-5">
        {field}: <div className="w-full border mx-3 px-5 py-1 rounded-full">{value}</div>
    </div>
  );
}
