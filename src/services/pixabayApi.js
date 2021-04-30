import axios from "axios";

const fetchImg = ({ searchQuery = "", currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20619002-8fc642db62a2cbb864bfebfc1&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then((response) => response.data.hits);
};

export default { fetchImg };
