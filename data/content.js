// All portfolio content lives here. Edit this file to update the site.
export const profile = {
  name: "Abhinand Krishna J",
  title: "Aspiring AWS Cloud & DevOps Engineer",
  headline:
    "I built a three-tier architecture on AWS with a load balancer, Auto Scaling and a managed database, and I'm looking for my first cloud role.",
  location: "Bangalore, India",
  email: "abhienquiry033@gmail.com",
  phone: "+91 96565 87998",
  phoneHref: "+919656587998",
  linkedin: "https://www.linkedin.com/in/abhinand-krishna-j-559437219",
  github: "https://github.com/abhi033333",
  resume: "/Abhinand_Krishna_J_Resume.pdf",
  roles: ["AWS Cloud Engineer", "Cloud Support Engineer", "Linux Administrator", "DevOps Engineer"],
  about: [
    "I'm a Computer Science Engineering graduate (2025) trained in Red Hat Linux administration, CCNA networking fundamentals, and Cloud Computing with DevOps tooling.",
    "I completed a six-month cloud computing internship at BDreamz Global Solutions, where I configured virtual machines, cloud storage, networking services and security policies on AWS. My projects apply the same services end to end.",
  ],
};

export const architecture = [
  { label: "Internet Gateway", note: "Entry point to the VPC" },
  { label: "Application Load Balancer", note: "Public subnets" },
  { label: "EC2 application server", note: "Private subnet, Auto Scaling Group" },
  { label: "Amazon RDS MySQL", note: "DB subnets" },
];

export const projects = [
  {
    name: "AWS Three-Tier Web Application",
    summary:
      "A WordPress application on a three-tier AWS architecture, spread across multiple Availability Zones.",
    points: [
      "VPC with public, private and DB subnets, route tables, Internet Gateway and NAT Gateway.",
      "Security Groups controlling traffic between the Application Load Balancer, application server and RDS database.",
      "WordPress on an EC2 application server in a private subnet, with Apache HTTPD, PHP and an Amazon RDS MySQL database.",
      "IAM role with AmazonSSMManagedInstanceCore for secure EC2 instance management.",
      "AMI of the application server, plus a Target Group and Application Load Balancer for availability and traffic distribution.",
      "Auto Scaling Group with CloudWatch and SNS for monitoring and notifications.",
    ],
    tags: ["VPC", "EC2", "ALB", "Auto Scaling", "RDS MySQL", "NAT Gateway", "IAM", "Security Groups", "CloudWatch", "SNS"],
  },
  {
    name: "AWS EFS Shared Storage",
    summary: "A high-availability web setup where two EC2 web servers serve the same site from shared storage.",
    points: [
      "Configured Amazon EFS shared storage across two Amazon EC2 Linux web servers.",
      "Deployed Apache HTTP Server on Amazon Linux 2023 and mounted EFS using NFS over TLS.",
      "Hosted centralized website content on EFS so both instances serve the same files.",
      "Implemented and verified the architecture using EC2, EFS, VPC and Security Groups.",
    ],
    tags: ["EC2", "EFS", "VPC", "Security Groups", "Apache", "Amazon Linux 2023"],
  },
];

export const otherWork = {
  name: "Early Detection of Cardiac Arrest in Newborns",
  text: "Worked on data-driven approaches for early prediction of cardiac arrest. The work shaped how I think about monitoring and alerting thresholds.",
};

export const experience = {
  role: "Cloud Computing Intern",
  company: "BDreamz Global Solutions Pvt. Ltd.",
  place: "Bangalore",
  period: "Feb 2026 – Jul 2026",
  points: [
    "Assisted in deploying and managing cloud infrastructure on AWS.",
    "Configured and maintained virtual machines, cloud storage, networking services and security policies.",
    "Monitored cloud resources, performed system maintenance, and helped optimize cloud performance and cost.",
    "Supported Linux server administration, backup and disaster recovery processes, and cloud security best practices.",
    "Worked with the team to automate deployment processes, troubleshoot cloud-related issues and maintain technical documentation.",
  ],
};

export const skills = [
  { group: "AWS", items: ["EC2", "VPC", "IAM", "S3", "ALB", "Auto Scaling", "CloudWatch", "Route 53", "EBS", "RDS", "EFS", "SNS", "Security Groups", "NAT Gateway", "Internet Gateway"] },
  { group: "DevOps tools", items: ["Docker", "Kubernetes", "Terraform", "Ansible", "Maven", "Git"] },
  { group: "Linux", items: ["Red Hat (user and admin basics)"] },
  { group: "Networking", items: ["CCNA fundamentals", "Routing", "Switching", "TCP/IP"] },
];

export const training = {
  title: "Cloud & Infrastructure Training Program",
  points: [
    "Linux (Red Hat OS): file systems, permissions, users and groups, process and package management.",
    "CCNA networking: OSI and TCP/IP models, IP addressing, subnetting, routing and switching basics.",
    "Cloud Computing and DevOps.",
  ],
};

export const education = {
  degree: "B.E. Computer Science Engineering",
  school: "Dhanalakshmi Srinivasan College of Engineering",
  period: "2021 – 2025",
  extra: "CGPA 7.2",
};

export const certifications = ["Cloud Computing and DevOps – Besant Technologies"];

export const softSkills = ["Problem-solving", "Critical thinking", "Communication", "Teamwork", "Time management", "Adaptability", "Decision-making", "Attention to detail"];
