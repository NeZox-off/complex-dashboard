import { useHistoryStore } from "../store";
import { HistoryLinks } from "../types";

export const useHistoryLinks = () => {
  const { history, removeHistoryLink, setHistoryLink } = useHistoryStore();
  function addHistory(data: HistoryLinks) {
    const current = history.slice(0, 6);
    const index = current.findIndex(
      (item) => item?.content?.title === data.content.title
    );
    if (index !== -1) {
      current[index].last_visit = new Date();
      current.unshift(current.splice(index, 1)[0]);
    } else {
      current.unshift(data);
    }
    setHistoryLink(current.splice(0, 6));
  }

  function removeHistory(title: string) {
    const removedHistory = history.filter((item) => item.title !== title);
    removeHistoryLink(removedHistory);
  }

  return { history, removeHistory, addHistory };
};
