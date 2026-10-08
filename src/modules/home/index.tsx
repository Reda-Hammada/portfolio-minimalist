export default function Home() {
  return (
    <div className="flex flex-col p-2 mt-2">
      <h1 className="text-2xl font-bold">WHO I AM?</h1>
      <p className="pt-2 text-base text-justify">
        Hey there 👋, I'm Reda Hammada, a software developer with a passion for building modern, responsive, and user-friendly web applications. Based in Morocco, I specialize in using React.js, Vue.js, and Nest.js to create engaging user interfaces and scalable solutions.

        My expertise spans various front-end and back-end technologies, with hands-on experience in:

        React Query, Zustand, and other state management tools.
        Material UI, Tailwind CSS,Ant Design and Schadcn for clean and efficient UI design.
        API integration and crafting web solutions with seamless functionality.

        I'm also exploring web security and penetration testing to complement my development skills and enhance the applications I build. With a solid foundation in private law and a drive to innovate, I bring a unique perspective to every project.
      </p>
      <a href="/portfolio-minimalist/resume.pdf" target="_balank">
        <button className="text-center mt-2  bg-background bg-foreground text-[#fff] w-[200px] h-[40px] rounded">read my resume</button>
      </a>
    </div>
  );
}
