import { cookies } from "next/headers";

const useServerDarkMode = async (defaultTheme = "dark") => {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? defaultTheme;

  return theme;
};

export default useServerDarkMode;
