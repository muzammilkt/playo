import BackendService from "./BackendService";

//to get all districts
const getDistricts = async () => {
    return BackendService.get(`districts/`);
  };

  const turfService ={
    getDistricts,

  }
  export default turfService;