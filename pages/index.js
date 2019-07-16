import Section from "../components/Section.js";
import Link from "next/link";
import inventory from "../static/inventory.js";

export default function Index() {
  console.log("inventory is ", inventory);
  return (
    <ul>
      {inventory.map(
        (x, i) => (
          <li key={i}>
            <Link href="sections/[id]" as={`sections/${i}`} >
              <a>{x["section_name"]}</a>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
