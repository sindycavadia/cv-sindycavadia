//import { ExtraSkills } from "../ExtraSkills";
import { Idiomas } from "./Idiomas";
//import { ProgrammingLanguages } from "../ProgrammingLanguages";

const Sidebar = () => {
    return (
      <aside className="w-[350px] p-2 flex flex-col gap-2 h-full">
        <div className="container-card flex flex-col gap-5 px-6 py-4">
          <div className="mx-1">imagen de perfil</div>
          <div>resumen de info personal</div>
        </div>
  <div className="flex flex-col gap-4 px-2 py-4 h-full">
          <h2>Mis Habilidades</h2>
          <div>
          <div>idioma</div>
          <Idiomas />
        </div>
        <div>
          ProgrammingLanguages 
        </div>
        ExtraSkills 
      </div>
      
    </aside>
  );
};
export { Sidebar };