

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29385955-aff2fabd11c0a187a88b06a62';

const ServiceApi = async (imageName, page) => {
  return await fetch(
    `${BASE_URL}?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(
      `There are no images with ${imageName} name`
    );
  });
};

const api = { ServiceApi };
export default api;
