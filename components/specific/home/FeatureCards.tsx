import React from "react";
import Card from "@/components/general/Card";
import Tab from "@/components/general/Tab";

export default function FeatureCards() {
  return (
    <div className="flex items-center justify-center p-4 md:px-4 md:py-12">
      <div className="max-w-screen-xl w-full mx-auto space-y-10">
        <div className="grid grid-cols-3 gap-6">
          <Card
            text1="Deployment Time"
            text2="40% ↓"
            text3="Wealth Management (USA)"
          />
          <Card
            text1="Cost Savings"
            text2=">63%"
            text3="University of Edinburgh "
          />
          <Card
            text1="Fast Recovery"
            text2="Cloud"
            text3="Home Automation (Australia)"
          />
        </div>

        <div className="flex justify-start">
          <div className="text-sm font-medium text-center w-auto text-muted-foreground border-b border-border">
            <ul className="flex flex-wrap -mb-px">
              <Tab active={false}>Simplify Infrastructure</Tab>
              <Tab active={true}>Save Costs</Tab>
              <Tab active={false}>Automate Workflows</Tab>
              <Tab active={false}>Enable AI</Tab>
              <Tab active={false}>Observe & Govern</Tab>
              <Tab active={false}>Modern Apps</Tab>
            </ul>
          </div>
        </div>

        <div className="flex items-center">
          <div className="">
            <h3 className="text-foreground text-xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
              10X Platform Engineering
            </h3>
            <h2 className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed mb-4">
              Choreo provides a unified platform for managing infrastructure,
              pipelines, and deployments. This allows platform engineers to
              provide an internal developer platform that enables developers to
              focus on building digital experiences.
            </h2>
          </div>
          <img src="/images/card-cilium.webp" alt="" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
            <span className="font-bold text-foreground">
              {" "}
              Run Where Your Data Lives:
            </span>{" "}
            Deploy and manage Kubernetes anywhere (AWS, Azure, GCP, Vultr, or on
            any upstream-compatible Kubernetes infrastructure).
          </p>
          <p className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
            <span className="font-bold text-foreground">
              Kubernetes extended:
            </span>{" "}
            Extend Kubernetes with fine-grained access controls,
            multi-environment support, and other capabilities–integrating over
            20+ CNCF projects under one control panel.
          </p>
          <p className="text-lg font-normal text-muted-foreground tracking-[0.128px] leading-relaxed">
            <span className="font-bold text-foreground">
              {" "}
              Multi-Environment Delivery:
            </span>{" "}
            Deploy and promote applications on Kubernetes clusters across
            multiple clouds and define continuous deployment pipelines.
          </p>
        </div>
      </div>
    </div>
  );
}
