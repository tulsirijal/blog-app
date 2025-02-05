import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { connectToDB } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";


// const login = async (credentials) => {
  
//     connectToDB();
//     const user = await User.findOne({ email: credentials.email });

//     if (!user) return null;

//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );

//     if (isPasswordCorrect) return user;
  
// };

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });

        if (!user) return null;
    
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );
    
        if (isPasswordCorrect) return user;
        return null
          
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDB();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
