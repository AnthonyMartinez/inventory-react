import { useRouter } from "next/router";
import Section from "../../components/Section.js";
import inventory from "../../static/inventory.js";

const Page = (props) => (
  <Section
    name={props.data["section_name"]} 
    data={props.data["data"]} 
  />
);

Page.getInitialProps = (context) => {
  // this is where an api call would go
  const { id } = context.query;
  const data = inventory[id]
  
  console.log("loading", data);
  return { data };
}
export default Page;
