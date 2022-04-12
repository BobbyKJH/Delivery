import Nav from "../../components/Nav";
import SelectMenu from "../../components/SelectMenu";
import dummy from "../../JSON/MainMenu.json";

function Jokvalandbossam() {
  return (
    <div>
      <Nav />
      <SelectMenu menus={dummy} />
    </div>
  );
}
export default Jokvalandbossam;
