import Input from "../Input"
import TransactionDetail from "./TransactionDetail"
import TransactionList from "./TransactionList"

const Transaction = () => {
  return (
    <div className="padding-container pt-32 text-green-30">
        <h2 className="text-2xl font-[600]">Transactions</h2>
        <div className="rounded-2xl border border-gray-20 bg-white mt-6 flex flex-col md:flex-row gap-4">
            <div className="w-full">
                <div className="p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="md:w-[40%]">
                        <Input type="text" name="search" placeholder="Search..." variant="primary-input" />
                    </div>
                    <select className="primary-select">
                        <option>Method</option>
                        <option>Paypal</option>
                        <option>Paystack</option>
                    </select>
                </div>
                <hr/>
                <TransactionList />
            </div>
            <TransactionDetail />
        </div>
    </div>
  )
}

export default Transaction
