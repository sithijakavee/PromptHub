import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes: ['/', '/about', '/contact','/policy', "/api/get-top-sellers", "/api/get-prompts"]
});
 
export const config = {
      matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/","/(api|trpc)(.*)"],
    //   ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/api/get-top-sellers"  ]
};
   