import Button from "../Button"

const TransactionDetail = () => {
  return (
    <div className="md:m-6 border border-gray-20 rounded-md p-6 bg-gray-90 md:min-w-[320px]">
      <h4 className="text-xl font-[600]">Transaction Details</h4>
      <hr/>
      <div className="py-4">
        <strong>Suplier:</strong>
        <p>TemplateMount</p>
      </div>
      <div className="py-2">
        <strong>Date:</strong>
        <p>December 19th, 2023</p>
      </div>
      <div className="py-2">
        <strong>Billing Address:</strong>
        <p>1901 Thornidge Cir, Shiloh, Hawaii 81063</p>
      </div>
      <div className="py-2">
        <strong>VAT ID:</strong>
        <p>5673635</p>
      </div>
      <div className="py-2">
        <strong>Email:</strong>
        <p>support@gmail.com</p>
      </div>
      <div className="py-2">
        <strong>Item purchased:</strong>
        <p>Adidas Air Joadon</p>
      </div>
      <div className="py-2">
        <label>Payment: Paystack</label>
        <h4 className="text-3xl font-[600]">$451.90</h4>
      </div>
      <hr/>
      <div className="py-2">
        <Button type="button" variant="btn_green_outline">Download Receipt</Button>
      </div>
    </div>
  )
}

export default TransactionDetail
