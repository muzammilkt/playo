import BackendService from "./BackendService";

//to get all districts
const getDistricts = async () => {
  return BackendService.get(`districts/`);
};
//to get all turfs
const getTurfs = async () => {
  return BackendService.get(`turfs/`);
};
//add personal details
const addPersonalDetails = async () => {
  return BackendService.post(`personalDetails/`);
};

//to get personal details
const getPersonalDetails = async (id) => {
  return BackendService.get(`personalDetails/${id}`);
};

//edit personal details
const updatePersonalDetails = async (id) => {
  return BackendService.patch(`addPersonalDetails/${id}`);
};

const turfService = {
  getDistricts,
  getTurfs,
  getPersonalDetails,
  addPersonalDetails,
  updatePersonalDetails,

};
export default turfService;
