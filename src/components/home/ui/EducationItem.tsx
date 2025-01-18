import BulletedText from "@/components/common/bulleted-text";
import Column from "@/components/core/Column";
import { IEducationItem } from "@/types";

const EducationItem = ({ data }: { data: IEducationItem }) => {
  return (
    <Column classNames="justify-between w-full h-full gap-2">
      <Column classNames="justify-start">
        <p className="text-lg/6 font-semibold">{data.qualification}</p>

        <p className="text-[var(--textColorLight)] text-base/6 font-medium">
          @{data.institution}
        </p>
      </Column>

      <div className="w-full flex flex-col gap-2 relative mt-0 md:mt-8">
        {data.description.map((desc, i) => {
          return (
            <BulletedText key={`edu-desc-${i}`}>
              <p className="text-base/6 font-normal">{desc}</p>
            </BulletedText>
          );
        })}
      </div>
    </Column>
  );
};

export default EducationItem;
