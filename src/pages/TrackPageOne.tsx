import { useState, useEffect, useCallback, type FC, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";

import TopHeaderOne from "../components/TopHeaderOne";
import HeaderOne from "../components/HeaderOne";
import CtaBannerOne from "../components/CtaBannerOne";
import FooterOne from "../components/FooterOne";

const API_BASE =
  "https://shl.itdservices.in/api/tracking_api/get_tracking_data";
const API_PARAMS =
  "customer_code=superadmin&company=sky-horse-logistics&api_company_id=18";

const inputClass =
  "form-control tw-py-4 tw-px-5 tw-rounded-xl border border-neutral-200 focus-border-main-600 tw-text-base text-heading fw-medium bg-white";

const selectClass =
  "form-select tw-py-4 tw-px-5 tw-rounded-xl border border-neutral-200 focus-border-main-600 tw-text-base text-heading fw-medium bg-white";

function formatDate(date: Date): string {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${monthIndex + 1}/${year}`;
}

interface DocketEvent {
  event_at?: string;
  event_location: string;
  event_description: string;
  event_remark?: string;
}

interface DocketInfo {
  tracking_no?: string;
  reference_no?: string;
  forwarding_no?: string;
  order_no?: string;
  eway_bill_no?: string;
  invoice_no?: string;
  forwarding_no2?: string;
  docket_info?: [string, string][];
  docket_events?: DocketEvent[];
  pcs?: string;
  forwarding_url?: string;
  pod_image?: string;
}

const TrackPageOne: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchSelected, setSearchSelected] = useState(searchParams.get("searchSelected") || "1");
  const [trackingNo, setTrackingNo] = useState(searchParams.get("tracking_no") || "");
  const [results, setResults] = useState<DocketInfo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState(0);

  const getSearchType = (searchBy: string) => {
    if (searchBy === "1") return "tracking_no";
    if (searchBy === "6") return "forwarding_no1";
    if (searchBy === "2") return "reference_no";
    return "tracking_no";
  };

  const getLabel = (docket: DocketInfo, searchBy: string) => {
    if (searchBy === "1") return `AWB: ${docket.tracking_no || ""}`;
    if (searchBy === "2") return `Reference: ${docket.reference_no || ""}`;
    if (searchBy === "3") return `Order: ${docket.order_no || ""}`;
    if (searchBy === "4") return `Eway Bill: ${docket.eway_bill_no || ""}`;
    if (searchBy === "5") return `Invoice: ${docket.invoice_no || ""}`;
    if (searchBy === "6") return `Forwarding: ${docket.forwarding_no || ""}`;
    return `Forwarding 2: ${docket.forwarding_no2 || ""}`;
  };

  const fetchTracking = useCallback(async () => {
    const trackingNoParam = searchParams.get("tracking_no");
    const searchBy = searchParams.get("searchSelected") || "1";

    if (!trackingNoParam?.trim()) return;

    let trackingNos = trackingNoParam.trim().split(/[\s,]+/);
    if (trackingNos.length > 10) {
      setError("Up to 10 tracking numbers are allowed at a time");
      setResults(null);
      return;
    }

    const searchType = getSearchType(searchBy);
    const query = `${searchType}=${encodeURIComponent(trackingNos.join(","))}&${API_PARAMS}`;
    const url = `${API_BASE}?${query}`;

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data && Array.isArray(data) && data.length) {
        setResults(data);
        setOpenIndex(0);
      } else {
        setError("No tracking data found");
      }
    } catch {
      setError("Failed to fetch tracking data");
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    const trackingNoParam = searchParams.get("tracking_no");
    const searchBy = searchParams.get("searchSelected");
    if (trackingNoParam) {
      setTrackingNo(trackingNoParam);
      setSearchSelected(searchBy || "1");
      fetchTracking();
    }
  }, [searchParams, fetchTracking]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = trackingNo.trim().replace(/\s+/g, ",");
    if (!trimmed) return;
    const params = new URLSearchParams();
    params.set("searchSelected", searchSelected);
    params.set("tracking_no", trimmed);
    setSearchParams(params);
  };

  useEffect(() => {
    if (!loading && results && results.length > 0) {
      document.querySelector(".track-result")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [loading, results]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const hasParams = searchParams.get("tracking_no");
  const showResults = hasParams && (results || loading || error);

  return (
    <>
      <TopHeaderOne />
      <HeaderOne />
      <section
        className='banner tw-py-100-px overflow-hidden position-relative'
        style={{
          background: "url(/assets/images/tracking-bg.jpg) no-repeat center/cover",
        }}
      >
        <div
          className='position-absolute top-0 tw-start-0 w-100 h-100 z-0'
          style={{ backgroundColor: "rgba(6, 52, 61, 0.6)" }}
          aria-hidden
        />
        <div className='container max-w-1400-px position-relative z-1'>
          <div className='row gy-4 align-items-center justify-content-center'>
            <div className='col-lg-12'>
              <div className='text-center'>
                <h1 className='splitTextStyleOne fw-light tw-leading-104 text-white'>
                  <span className='d-inline-block'>Track</span>
                  <span className='d-inline-block'>&nbsp;</span>
                  <span className='d-inline-block'>Shipment</span>
                </h1>
                <p className='text-white tw-text-lg fw-medium tw-mt-4 splitTextStyleOne tw-opacity-90'>
                  Track your shipment status in real time
                </p>
                <nav className='tw-mt-4 tw-text-sm text-white' aria-label='Breadcrumb'>
                  <Link to='/' className='text-white text-decoration-none hover-underline'>
                    Home
                  </Link>
                  <span className='tw-mx-2 tw-opacity-80'>&gt;</span>
                  <span className='tw-opacity-90'>Tracking</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-120 section-bg-one'>
        <div className='container'>
          <div className='text-center tw-mb-10' data-aos='fade-up' data-aos-duration={600}>
            <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205 d-inline-block'>
              Track Your Shipment
            </span>
            <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mt-3'>
              <span className='d-inline-block'>Shipment</span>
              <span className='d-inline-block'>&nbsp;</span>
              <span className='d-inline-block fw-semibold text-main-600'>Tracking</span>
            </h3>
            <p className='text-neutral-500 tw-mt-4 tw-max-w-2xl mx-auto'>
              Enter your tracking number below. For multiple shipments, separate numbers with a comma.
            </p>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-8'>
              <div
                className='bg-white tw-rounded-3xl tw-p-8 tw-p-lg-10 shadow-lg'
                data-aos='fade-up'
                data-aos-duration={600}
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
              >
                <form onSubmit={handleSubmit}>
                  <div className='tw-mb-5'>
                    <label htmlFor='searchSelected' className='form-label fw-semibold text-heading tw-mb-2'>
                      Search by
                    </label>
                    <select
                      name='searchSelected'
                      id='searchSelected'
                      className={selectClass}
                      value={searchSelected}
                      onChange={(e) => setSearchSelected(e.target.value)}
                      aria-label='Search by tracking type'
                    >
                      <option value='1'>AWB No.</option>
                      <option value='6'>Forwarding No.</option>
                      <option value='2'>Reference No.</option>
                    </select>
                  </div>
                  <div className='tw-mb-6'>
                    <label htmlFor='tracking_no' className='form-label fw-semibold text-heading tw-mb-2'>
                      Tracking number
                    </label>
                    <input
                      type='text'
                      name='tracking_no'
                      id='tracking_no'
                      className={inputClass}
                      placeholder='Enter your tracking number...'
                      value={trackingNo}
                      onChange={(e) => setTrackingNo(e.target.value)}
                      required
                    />
                  </div>
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='w-100 hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
                      data-block='button'
                    >
                      <span className='button__flair' />
                      <span className='button__label'>Track Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {showResults && (
            <div className='row tw-mt-10'>
              <div className='col-12 track-result track-block'>
                {loading && (
                  <div className='text-center tw-py-12'>
                    <div className='spinner-border text-main-600' role='status'>
                      <span className='visually-hidden'>Loading...</span>
                    </div>
                    <p className='tw-mt-3 text-neutral-600'>Fetching tracking data...</p>
                  </div>
                )}
                {error && (
                  <div className='alert alert-danger tw-rounded-xl' role='alert'>
                    {error}
                  </div>
                )}
                {!loading && results && results.length > 0 && (
                  <div className='accordion tracking-data'>
                    {results.map((docket, index) => {
                      const searchBy = searchParams.get("searchSelected") || "1";
                      const lbl = getLabel(docket, searchBy);
                      const status = docket.docket_info?.[4]?.[1] || "";
                      const isActive = openIndex === index;

                      if (!docket.docket_info?.length && !docket.docket_events?.length) {
                        return (
                          <div key={index} className='invalid-record'>
                            <h5>Invalid No.: {docket.tracking_no}</h5>
                          </div>
                        );
                      }

                      if (!docket.docket_info?.length) return null;

                      const di = docket.docket_info;
                      const deliveryDate = di[5]?.[1];
                      const deliveryDateStr =
                        !deliveryDate || isNaN(new Date(deliveryDate).getTime())
                          ? " "
                          : formatDate(new Date(deliveryDate));
                      const deliveryTime = deliveryDate ? deliveryDate.split(" ")[1] || "" : "";

                      return (
                        <div key={index}>
                          <div
                            className={`accordion-header ${isActive ? "active" : ""}`}
                            onClick={() => toggleAccordion(index)}
                            role='button'
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && toggleAccordion(index)}
                            aria-expanded={isActive}
                          >
                            <h2>{lbl}</h2>
                            <h2>Status: {status}</h2>
                            <span className='accordion-toggle'>
                              <i className={`ph-bold ${isActive ? "ph-minus" : "ph-plus"}`} />
                            </span>
                          </div>
                          <div className={`accordion-body ${isActive ? "active" : ""}`}>
                            <h3 className='text-center'>{lbl}</h3>
                            <div className='tracking-info mt-4'>
                              <div className='table-responsive'>
                                <table>
                                  <thead>
                                    <tr>
                                      <td colSpan={11}>
                                        <b>Tracking Information</b>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>AWB</th>
                                      <th>Booked</th>
                                      <th>Consignee</th>
                                      <th>Dest.</th>
                                      <th>Pieces</th>
                                      <th>Status</th>
                                      <th>Del. Date</th>
                                      <th>Del. Time</th>
                                      <th>Receiver</th>
                                      <th>Forwarding</th>
                                      <th>POD</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>{di[0]?.[1]}</td>
                                      <td>{di[1]?.[1] ? formatDate(new Date(di[1][1])) : ""}</td>
                                      <td>{di[2]?.[1]}</td>
                                      <td>{di[3]?.[1]}</td>
                                      <td>{docket.pcs || ""}</td>
                                      <td>{di[4]?.[1]}</td>
                                      <td>{deliveryDateStr}</td>
                                      <td>{deliveryTime}</td>
                                      <td>{di[6]?.[1]}</td>
                                      <td>
                                        {docket.forwarding_url ? (
                                          <a
                                            href={docket.forwarding_url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-dark fw-semibold text-decoration-underline'
                                          >
                                            {docket.forwarding_no}
                                          </a>
                                        ) : (
                                          docket.forwarding_no || ""
                                        )}
                                      </td>
                                      <td>
                                        {docket.pod_image ? (
                                          <a
                                            href={docket.pod_image}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                          >
                                            View
                                          </a>
                                        ) : (
                                          ""
                                        )}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            {docket.docket_events && docket.docket_events.length > 0 && (
                              <div className='delivery-info mt-4'>
                                <div className='table-responsive'>
                                  <table>
                                    <thead>
                                      <tr>
                                        <td colSpan={5}>
                                          <b>Delivery Information</b>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Location</th>
                                        <th>Activity</th>
                                        <th>Remarks</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {docket.docket_events.map((ev, evIdx) => (
                                        <tr key={evIdx}>
                                          <td>
                                            {ev.event_at ? formatDate(new Date(ev.event_at)) : " "}
                                          </td>
                                          <td>
                                            {ev.event_at ? ev.event_at.split(" ")[1]?.slice(0, 5) || "" : " "}
                                          </td>
                                          <td>{ev.event_location}</td>
                                          <td>{ev.event_description}</td>
                                          <td>{ev.event_remark || ""}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      <CtaBannerOne />
      <FooterOne />
    </>
  );
};

export default TrackPageOne;
