import { headers } from "next/headers";

const useLayoutPathname = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");
  const id = pathname?.replace("/dashboard/task-manager/b/", "");
  return { id: id };
};

export { useLayoutPathname };
