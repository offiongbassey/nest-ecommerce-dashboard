import Button from "../Button"


const OrderSummary = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-14 justify-between">
        <div className="md:w-[65%]">
            <div className="relative overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-90">
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">Unit Price</th>
                            <th className="px-4 py-3">Quantity</th>
                            <th className="px-4 py-3 text-right">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-3">Haagen-Dazs Caramel Cone</td>
                            <td className="px-4 py-3">$44.1</td>
                            <td className="px-4 py-3">2</td>
                            <td className="px-4 py-3 text-right">$99.0</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3">Haagen-Dazs Caramel Cone</td>
                            <td className="px-4 py-3">$44.1</td>
                            <td className="px-4 py-3">2</td>
                            <td className="px-4 py-3 text-right">$99.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col md:items-end">
                <table>
                    <tbody>
                        <tr>
                            <td className="pr-10">Subtotal</td>
                            <td className="px-4 text-right">$973.30</td>
                        </tr>
                        <tr>
                            <td className="pr-10">Shipping cost:</td>
                            <td className="px-4 text-right">$10.00</td>
                        </tr>
                        <tr>
                            <td className="pr-10">Grand total:</td>
                            <td className="px-4 text-right"><strong className="text-2xl">$983.00</strong></td>
                        </tr>
                        <tr>
                            <td className="pr-10 text-gray-50">Status:</td>
                            <td className="px-4 text-right py-2"><span className="px-2 py-1 bg-green-50 text-green-10 rounded-2xl text-nowrap">Payment done</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <div className="bg-gray-90 border border-gray-20 rounded-md p-4 text-green-30 mb-4">
                <h2>Payment info</h2>
                <p>Master Card **** **** 4768</p>
                <p>Business Name: Grand Market LLC</p>
                <p>Phone: +1 (800) 555-154-52</p>
            </div>
            <div>
                <p>Notes</p>
                <textarea rows={3} className="bg-gray-90 focus:outline-none rounded-md w-full mb-4"></textarea>
                <Button type="button" variant="btn_green">Save note</Button>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary
