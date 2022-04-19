import BackendService from "./BackendService";

//get all districts
const getTimeSlots = async (id) => {
  return BackendService.get(`timeSlots/${id}`);
};

//book slot
const bookSlot = async (data) => {
  return BackendService.get(`bookings/` , data);
};


const TimeSlotService = {
    getTimeSlots,
    bookSlot,
  };
  export default TimeSlotService;
