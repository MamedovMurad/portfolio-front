import { FunctionComponent, useState, useEffect } from "react";
import { admin_file, api } from "../../helpers/api";
import { MonthPickerInput } from '@mantine/dates';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';
import { LoadingOverlay } from "@mantine/core";
import { Link } from "react-router-dom";



const CertificaPage: FunctionComponent = () => {
    const [value, setValue] = useState<Date | null>(null)
    const [page, setpage] = useState(1);
    const formattedDate = value
        ? `${value.getFullYear()}-${(value.getMonth() + 1).toString().padStart(2, "0")}`
        : null;
    console.log(formattedDate);
    const [isShow, setisShow] = useState(false);
    const [certificates, setCertificates] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)


        api.get("filter-certificates?date=" + (formattedDate || "")+"&page="+page).then((data) => {
            if (certificates) {
                setCertificates([...certificates,...data?.data?.data])
            }else{
                setCertificates(data?.data?.data)
            }
       
            setisShow(data?.data?.data?.length > 35)
        }).finally(() => {
            setLoading(false)
        })
    }, [formattedDate,page]);



    return (
        <div className="container mx-auto py-10 px-4 md:px-0">
            <h1 className="text-3xl font-bold mb-8 text-center">Members Certificates</h1>
            <div className="flex justify-end items-center py-3">
                <div className=" md:w-2/12 w-full pb-4">
                    <MonthPickerInput
                        className=" w-full"
                        label="Filter the certificates"
                        placeholder="Filter the certificates"
                        clearable
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates?.map((certificate: any) => (
                    <Link target="_blank" to={admin_file + certificate?.pdf} key={certificate.id} className="bg-primary border shadow-md rounded-lg overflow-hidden relative">
                        <img src={admin_file + certificate?.image} className="w-full h-full object-cover" />
                        <div className="p-2 absolute bottom-0 left-0 shadow-md bg-white">
                            {/* <h2 className="text-xl font-semibold mb-2">{certificate.name}</h2> */}
                            <p className="text-gray-600 mb-1">Author: {certificate?.author_name}</p>
                            <p className="text-gray-500">Date of Certificate: {dayjs(certificate.created_at + "").format("DD/MM/YY")}</p>
                            {/* <div className="mt-4">
                                <Link target="_blank" to={admin_file + certificate?.pdf} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
                                    View Certificate
                                </Link>
                            </div> */}
                        </div>
                    </Link>
                ))}

                <LoadingOverlay
                    visible={loading}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2, backgroundOpacity: 0.1 }}
                    loaderProps={{ color: 'pink', type: 'bars' }}
                />
            </div>

            <div className={" text-center w-full block mt-2 " +(isShow?"":"hidden")}>
            <button onClick={() => setpage(page + 1)} className=" bg-text-primary text-primary font-semibold text-lg py-2 px-5 rounded-md ">See More</button>
        </div>
        </div>
    );
};

export default CertificaPage;
