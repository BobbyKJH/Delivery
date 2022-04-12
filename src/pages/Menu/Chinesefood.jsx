import Nav from "../../components/Nav";
import SelectMenu from "../../components/SelectMenu";
import dummy from "../../JSON/MainMenu.json";

function Chinesefood() {
  return (
    <div>
      <Nav />
      <SelectMenu menus={dummy} />
    </div>
  );
}
export default Chinesefood;
