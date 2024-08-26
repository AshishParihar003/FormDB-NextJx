import React from 'react';

const CancellationRefundPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-6 py-20 px-36" >
      <h1 className="text-3xl text-center font-bold mb-4"style={{fontSize: 35}}>Cancellation & Refund Policy</h1><br />
      <p>Thank you for choosing GBDRIFT INDIA PRIVATE LIMITED for your needs. We strive to provide the best services and products to our customers. Please read our cancellation and refund policy carefully to understand our practices regarding these processes.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Cancellation Policy</h2>
      <p>Once an order is placed and payment is made, we do not entertain any cancellations. We advise you to review your order carefully before making a purchase. This policy is in place to maintain fairness and consistency for all our customers.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Refund Policy</h2>
      <p>All sales are final. We do not offer refunds on any products or services purchased. Please ensure you fully understand what you are purchasing before completing the transaction. If you have any questions about our products or services, please contact our support team for more information before making a purchase.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Exceptional Circumstances</h2>
      <p>In exceptional circumstances, such as duplicate payments due to technical glitches, we will review refund requests on a case-by-case basis. If a refund is granted, it will be processed within 7-10 business days. Please note that the final decision on any refund request lies solely with GBDRIFT INDIA PRIVATE LIMITED.</p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions about our Cancellation & Refund Policy, please contact us:</p>
      <ul className="list-disc list-inside">
        <li>Email: <a href="mailto:prem.nath@gbdrift.com" className="text-blue-500">prem.nath@gbdrift.com</a></li>
        <li>Phone: +91 7870970617</li>
        <li>Address: B.No 958, Sector 21, Pocket C, Gurgaon, HARYANA 122016</li>
      </ul>

      {/* Uncomment the form below if needed */}
      {/* <form>
        <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Nk0DrLDcicU9iS" async> </script>
      </form> */}
    </div>
  );
};

export default CancellationRefundPolicy;
