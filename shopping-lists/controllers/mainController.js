import { countAllItems } from "../services/itemService";
import { countAllLists, getAllLists } from "../services/listService";

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

export const showMain = async () => {
  const listRows = await countAllLists();
  const listCount = listRows[0].count;
  const itemRows = await countAllItems();
  const itemCount = itemRows[0].count;

  const data = {
    listCount,
    itemCount,
  };

  return new Response(await renderFile("main.eta", data), responseDetails);
};
