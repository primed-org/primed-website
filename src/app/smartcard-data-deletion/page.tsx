'use client';

import Image from 'next/image';
import Link from 'next/link';

const SmartcardDataDeletion = () => {

    return (
        <div className="w-full flex flex-col items-start mt-[100px] pl-[50px]">
            <h1 className='text-2xl font-bold text-black'>Data Deletion Policy for SmartCard App</h1>
            <p className='text-sm font-normal text-black mt-2'>We understand that you may wish to delete your account from the SmartCard App. This page provides detailed information <br /> about the account deletion process, including the steps to request deletion, the types of data that will be deleted, and any <br /> data that may be retained for legal or operational reasons.</p>
            <h2 className='text-2xl font-bold text-black mt-8'>How to Request Account Deletion</h2>
            <p className='text-sm font-normal text-black mt-2'>To request the deletion of your SmartCard account, please follow the steps below:</p>
            <div className="flex justify-between gap-2 mt-3">
                <Image
                    src="/images/email-delete-icon.svg"
                    alt="email-icon"
                    className="w-[50px] h-[50px]"
                    width={50}
                    height={50}
                />
                <div className="flex flex-col justify-between gap-1">
                    <h2 className='text-sm font-semibold text-black'>Step 1: Send an email to <Link href='mailto:support@primedehealth.com'><span className='underline'>support@primedehealth.com</span></Link> </h2>
                    <p className='text-xs font-normal text-[#4F7A96]'>Use the subject line: Account Deletion Request</p>
                    <p className='text-xs font-normal text-[#4F7A96]'>Include your registered email address and full name in the message body</p>
                </div>
            </div>
            <div className="flex justify-between gap-2 mt-5">
                <Image
                    src="/images/delete-icon.svg"
                    alt="delete-icon"
                    className="w-[50px] h-[50px]"
                    width={50}
                    height={50}
                />
                <div className="flex flex-col justify-between">
                    <h2 className='text-sm font-semibold text-black'>Step 2: Confirm Deletion</h2>
                    <p className='text-xs font-normal text-[#4F7A96]'>We will process your request within <strong>7 business days</strong>, and confirm once your data has been deleted.</p>
                    <div className='mt-2'></div>
                </div>
            </div>
            <h2 className='text-2xl font-bold text-black mt-8'>Data Deletion & Retention</h2>
            <p className='text-sm font-normal text-black mt-2'>Upon successful account deletion, the following data will be permanently removed from our active systems:</p>
            <div className="flex justify-between gap-2 mt-5">
                <Image
                    src="/images/user-icon.svg"
                    alt="user-icon"
                    className="w-[40px] h-[40px]"
                    width={40}
                    height={40}
                />
                <p className='text-sm font-normal text-black mt-3'>Personal Information</p>
            </div>
            <div className="flex justify-between gap-2 mt-5">
                <Image
                    src="/images/health-icon.svg"
                    alt="health-icon"
                    className="w-[40px] h-[40px]"
                    width={40}
                    height={40}
                />
                <p className='text-sm font-normal text-black mt-3'>Appointment History</p>
            </div>
            <div className="flex justify-between gap-2 mt-5">
                <Image
                    src="/images/wallet-icon.svg"
                    alt="wallet-icon"
                    className="w-[40px] h-[40px]"
                    width={40}
                    height={40}
                />
                <p className='text-sm font-normal text-black mt-3'>Wallet Details & Payment History</p>
            </div>

            <div className="flex justify-between gap-2 mt-5">
                <Image
                    src="/images/communication-icon.svg"
                    alt="communication-icon"
                    className="w-[40px] h-[40px]"
                    width={40}
                    height={40}
                />
                <p className='text-sm font-normal text-black mt-3'>Consultation Logs & Prescriptions</p>
            </div>
            <p className='text-sm font-normal text-black mt-5'>Please note that some data may be retained for a limited period for legal, regulatory, or operational purposes, such as:</p>
            <div className="flex justify-between gap-2 mt-5">
                <Image
                    src="/images/wallet-icon.svg"
                    alt="wallet-icon"
                    className="w-[40px] h-[40px]"
                    width={40}
                    height={40}
                />
                <p className='text-sm font-normal text-black mt-3'>Billing records</p>
            </div>
            <div className="flex justify-between gap-2 mt-5">
                <Image
                    src="/images/audit-logs-icon.svg"
                    alt="audit-logs-icon"
                    className="w-[40px] h-[40px]"
                    width={40}
                    height={40}
                />
                <p className='text-sm font-normal text-black mt-3'>Audit Logs</p>
            </div>
            <p className='text-sm font-normal text-black mt-5'>Retained data will be securely stored and accessed only when necessary. After the retention period, this data will also be <br /> permanently deleted.</p>
            <p className='text-sm font-normal text-black my-5'>If you have any questions or concerns about the account deletion process or data retention, please contact our support team <br /> at info@primedEhealth.com or call us at +234 814 114 3029.</p>
        </div>
    );
};

export default SmartcardDataDeletion;
