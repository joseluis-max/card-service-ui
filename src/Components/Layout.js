/* ----------------------------------------------------
  Copyright (c) José Valdiviezo. All rights reserved.
----------------------------------------------------- */
import Header from "@/Components/Header";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Header />
      { children }
    </div>
  );
}
