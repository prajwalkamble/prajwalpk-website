import Link from "next/link";
import Strings from "@/constants/strings";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href={Strings.whatsappLink}
      target="_blank"
    >
      Connect With Me
    </Link>
  );
};

export default TalkButton;
