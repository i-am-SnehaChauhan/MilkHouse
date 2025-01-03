import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Containertitle,
  FeaturesCard,
  FeaturesIcon,
  FeaturesH2,
  FeaturesP,
  FeaturesWrapper,
} from "./FeatureElements";
import Icon1 from "../../image/e-caatle.jpg";
import Icon2 from "../../image/modern-dairy.jpg";
import Icon3 from "../../image/home-delivery.jpg";
import Icon4 from "../../image/dairy-products.jpg";
import Icon5 from "../../image/a2-milk.jpg";
import Icon6 from "../../image/fodder.jpg";

const Features = () => {
  const { t } = useTranslation();  // Initialize translation hook

  return (
    <Container id="featureSection">
      <Containertitle>{t("features_section.title")}</Containertitle>
      <div className="row">
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon1} />
            </FeaturesCard>
            <FeaturesH2>{t("features_section.modernDairy")}</FeaturesH2>
            <div className="text">{t("features_section.modernDairyDesc")}</div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon2} />
            </FeaturesCard>
            <FeaturesH2>{t("features_section.customerSupport")}</FeaturesH2>
            <div className="text">{t("features_section.customerSupportDesc")}</div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon3} />
            </FeaturesCard>
            <FeaturesH2>{t("features_section.homeDelivery")}</FeaturesH2>
            <div className="text">{t("features_section.homeDeliveryDesc")}</div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon4} />
            </FeaturesCard>
            <FeaturesH2>{t("features_section.bestQualityProducts")}</FeaturesH2>
            <div className="text">{t("features_section.bestQualityProductsDesc")}</div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon5} />
            </FeaturesCard>
            <FeaturesH2>{t("features_section.healthyA2Milk")}</FeaturesH2>
            <div className="text">{t("features_section.healthyA2MilkDesc")}</div>
          </FeaturesP>
        </div>
        <div className="col-lg-4 col-md-6 service-block-one">
          <FeaturesP>
            <FeaturesCard>
              <FeaturesIcon src={Icon6} />
            </FeaturesCard>
            <FeaturesH2>{t("features_section.connectingDairyOwners")}</FeaturesH2>
            <div className="text">{t("features_section.connectingDairyOwnersDesc")}</div>
          </FeaturesP>
        </div>
      </div>
    </Container>
  );
};

export default Features;
