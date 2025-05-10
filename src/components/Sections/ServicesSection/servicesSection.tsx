"use client";
import { Accordion, AccordionSummary, styled, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import Image from "next/image";
import "./services.css";

export default function ServicesSection() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const AccordionIcon = (panel: string) => {
    const isPanelExpanded = expanded === panel;
    return isPanelExpanded ? (
      <MinusCircle size={20} weight="bold" color="#9b9b9b" />
    ) : (
      <PlusCircle size={20} weight="bold" color="#9b9b9b" />
    );
  };

  return (
    <div
      className="services-section  px-10  md:px-50 lg:px-50  py-20 accordion-container "
      style={{ width: "100%" }}
    >
      <h1
        style={{ color: "#246578" }}
        className="text-center text-2xl lg:text-5xl font-bold mb-10 lg:mb-20"
      >
        Our Services
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-50">
        <div>
          <StyledAccordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={AccordionIcon("panel1")}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <StyledTypography>Web Development</StyledTypography>
              {/* <Typography component="span" sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography> */}
            </AccordionSummary>
            <StyledAccordionDetails>
              <Typography>
                We build fast, responsive, and user-friendly websites tailored
                to your business needs — from landing pages to full web apps.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={AccordionIcon("panel2")}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <StyledTypography>UI/UX & Web Design</StyledTypography>
              {/* <Typography component="span" sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
            </AccordionSummary>
            <StyledAccordionDetails>
              <Typography>
                We design sleek and modern interfaces that offer a seamless user
                experience, ensuring your brand stands out.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={AccordionIcon("panel3")}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <StyledTypography>Graphic Design</StyledTypography>
              {/* <Typography component="span" sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
            </AccordionSummary>
            <StyledAccordionDetails>
              <Typography>
                From logos to social media assets, we create visual content that
                communicates your brand clearly and creatively.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={AccordionIcon("panel4")}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <StyledTypography>Video Editing & Montage data</StyledTypography>
            </AccordionSummary>
            <StyledAccordionDetails>
              <Typography>
                We craft high-quality video edits and montages that bring your
                content to life, perfect for marketing, social media, and more.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        </div>
        <div>
          <Image src="/laptop.png" alt="services" width={700} height={700} />
        </div>
      </div>
    </div>
  );
}
const StyledAccordion = styled(Accordion)({
  marginBottom: "10px",
  borderRadius: "10px !important",
  borderTop: "none !important",
  boxShadow: "none !important",
  backgroundColor: "#f6f6f6",
  "&::before": {
    display: "none", // This removes the top border that MUI adds by default
  },
  "& .MuiAccordionSummary-root": {
    borderTop: "none",
    borderRadius: "10px !important",
    flexDirection: "row-reverse", // This places the icon at the beginning
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    marginRight: "16px", // Add some spacing between the icon and the content
    transform: "none !important", // Prevent the icon from rotating
  },
  // Remove position relative which was causing the border to appear
  "& .MuiPaper-root": {
    position: "static",
    borderRadius: "10px !important",
  },
});
const StyledTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "700",
  flexShrink: 0,
  "@media (max-width: 400px)": {
    fontSize: "12px",
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  marginLeft: "40px !important",
});
