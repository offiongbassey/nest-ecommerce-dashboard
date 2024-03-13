import Button from "../Button"

const TransactionList = () => {
  return (
    <div className="relative overflow-x-auto py-6">
        <table className="w-full text-left">
            <thead>
                <tr className="bg-gray-90">
                    <th className="px-4 py-2">Transaction ID</th>
                    <th className="px-4 py-2">Paid</th>
                    <th className="px-4 py-2">Method</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2 text-right">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-4 py-2">#456667</td>
                    <td className="px-4 py-2">$294.00</td>
                    <td className="px-4 py-2">Paypal</td>
                    <td className="px-4 py-2">16.12.2020, 14:21</td>
                    <td className="px-4 py-2 items-center justify-end flex"><Button type="button" size="small" variant="btn_green_outline">Details</Button></td>
                </tr>
                <tr>
                    <td className="px-4 py-2">#456667</td>
                    <td className="px-4 py-2">$294.00</td>
                    <td className="px-4 py-2">Paypal</td>
                    <td className="px-4 py-2">16.12.2020, 14:21</td>
                    <td className="px-4 py-2 items-center justify-end flex"><Button type="button" size="small" variant="btn_green_outline">Details</Button></td>
                </tr>
                <tr>
                    <td className="px-4 py-2">#456667</td>
                    <td className="px-4 py-2">$294.00</td>
                    <td className="px-4 py-2">Paypal</td>
                    <td className="px-4 py-2">16.12.2020, 14:21</td>
                    <td className="px-4 py-2 items-center justify-end flex"><Button type="button" size="small" variant="btn_green_outline">Details</Button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TransactionList
