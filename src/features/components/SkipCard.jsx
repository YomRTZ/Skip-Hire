import Card from "../../commons/Card";

const SkipCard = ({ skip }) => (
  <Card>
    {/* <h2 className="text-lg font-semibold">Size: {skip.size} Yard</h2> */}
    <img
    src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
    alt={`Skip Size ${skip.size}`}
    className="w-full h-48 object-cover rounded pb-6 sm:pb-6 md:pb-6 lg:pb-6 xl:pb-6"
    />
    <p className="text-brand">Hire Period: {skip.hire_period_days} days</p>
    <p className="text-brand">Total Price: £{skip.getTotalPrice().toFixed(2)}</p>
    <p className="text-brand">On Road: {skip.allowed_on_road ? "Yes" : "No"}</p>
    <p className="text-brand">Heavy Waste: {skip.allows_heavy_waste ? "Yes" : "No"}</p>
  </Card>
);

export default SkipCard;
// const SkipCard = ({ skip }) => (
//   <div className="border border-red-500 bg-yellow-100 p-4">
//     <p>{skip.size} Yard Skip</p>
//   </div>
// );
// export default SkipCard;