"use client";
import { styled } from "@mui/material";
import "./button.css";

export function BorderBottomButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledButton className="bg">{children}</StyledButton>;
}

export const StyledButton = styled("button")({
  border: "none",
  borderBottom: "1px solid currentColor",
  boxShadow: "none",
  fontWeight: "bold",
  textTransform: "none",
  margin: "0",
  borderRadius: "8px",
  padding: "10px 20px",
  transition: "all 0.8s ease",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: "transparent",
    borderBottom: "1px solid currentColor",
    boxShadow: "none",
    borderRadius: "0px",
  },
});
