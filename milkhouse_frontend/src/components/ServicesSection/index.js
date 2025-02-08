import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper1,
  ServicesWrapper2,
  ServicesRow,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";
const url =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690471828/milkhouse/kfwjcpdgayndphlure4j.png";
const url1 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690472973/milkhouse/lqlhhvvryfd5hdvs7dij.png";
const url2 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690472807/milkhouse/apqbx3euquv7rl8fwdc3.png";
const url3 =
  "https://res.cloudinary.com/dv6yivx37/image/upload/v1690473090/milkhouse/pnvx5ybehzvjwyr3syqq.png";
const Icon4 =
  "https://res.cloudinary.com/dengnzxkd/image/upload/f_auto,q_auto/v1/Milkdelights_Images/cowimage";
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesWrapper2>
        <ServicesRow>
        <div class="col-lg-7">
        <ServicesP>
          <ServicesH1>Know About our Farm and History</ServicesH1>
          <ServicesWrapper1>
            Our farm is located in the heart of the city and we have been
            serving our customers for more than 20 years "Enjoy the natural
            goodness of A2 milk, which is believed to be easier to digest and
            absorb, making it a favorable choice for those looking for a gentle
            and nutritious dairy option.
            </ServicesWrapper1>
          </ServicesP>
          <ServicesRow>
            <ServicesIcon src={url} />
            <ServicesIcon src={url1} />/
            <ServicesIcon src={url2} />
            <ServicesIcon src={url3} />
          </ServicesRow>
        </div>
        <div class="col-lg-5">
          <ServicesIcon src={Icon4} />
        </div>
        </ServicesRow>
      </ServicesWrapper2>
    </ServicesContainer>
  );
};

export default Services;
