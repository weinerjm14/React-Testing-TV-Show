import axios from "axios";

export const fetchShow = () => {
  return axios
    .get(
      "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      console.log("response:", res);
      return res;
    })
    .catch(err => {
      console.log("error retrieving data from server, err:", err);
      return err;
    });
};
