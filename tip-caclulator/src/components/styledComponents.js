import tw from "tailwind-styled-components";

export const AppContainer = tw.div`
    w-screen
    h-screen 
    flex
    flex-col
    justify-center
    items-center
    bg-rose-100
   
`;

export const ContentWrapper = tw.div`
   w-[90vw]
   h-full
   my-[5vw]
   md:h-1/2
   md:w-3/4
   rounded-xl
   bg-rose-50
   hover:scale-105
   transition
   ease-in-out
   duration-200
   drop-shadow-lg
`;

export const StyledInput = tw.input`
    w-full
    px-2 
    py-3
    rounded-lg 
    border 
    border-rose-600 
    text-rose-400
    bg-transparent

`;
