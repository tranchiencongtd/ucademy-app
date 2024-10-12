import { primaryButtonClassName } from "@/constants";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className=" text-secondary font-bold text-xl inline-block mb-5">
        Học online 1-1 với thầy Trần Chiến Công
      </h1>
      <div></div>
      <Link
        href="https://fb.com/thaycongmath"
        className={primaryButtonClassName}
      >
        Liên hệ
      </Link>
    </div>
  );
};

export default page;
