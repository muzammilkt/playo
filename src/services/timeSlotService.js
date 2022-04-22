import BackendService from "./BackendService";

//get all districts
const getTimeSlots = async (id) => {
  return BackendService.get(`timeSlots/${id}`);
};

//book slot
const bookSlot = async (data) => {
  return BackendService.post(`bookings/` , data);
};

//delete Booking
const DeleteBooking = async (id)=>{
  return BackendService.destroy(`bookings/${id}`);
};


const TimeSlotService = {
    getTimeSlots,
    bookSlot,
    DeleteBooking
  };
  export default TimeSlotService;
