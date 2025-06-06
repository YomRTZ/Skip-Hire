import Card from "../../commons/Card";

const SkipCard = ({ skip }) => (
  <Card>
    <h2 className="text-lg font-semibold">Size: {skip.size} Yard</h2>
    <img
    src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
    alt={`Skip Size ${skip.size}`}
    className="w-full h-48 object-cover rounded"
    />
    <p>Hire Period: {skip.hire_period_days} days</p>
    <p>Total Price: £{skip.getTotalPrice().toFixed(2)}</p>
    <p>On Road: {skip.allowed_on_road ? "Yes" : "No"}</p>
    <p>Heavy Waste: {skip.allows_heavy_waste ? "Yes" : "No"}</p>
  </Card>
);

export default SkipCard;
