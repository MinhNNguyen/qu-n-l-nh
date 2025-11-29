// Mock data for the Real Estate Owner Dashboard

export interface Meeting {
  id: string;
  date: string;
  time: string;
  renterName: string;
  buildingName: string;
  unitNumber: string;
}

export interface UnitSetupMarketing {
  id: string;
  status: 'setup-marketing';
  name: string;
  address: string;
}

export interface UnitOnSale {
  id: string;
  status: 'on-sale';
  name: string;
  address: string;
  facebookPostUrl: string;
  inquiries: number;
  viewingRequests: number;
}

export interface UnitOnDeposit {
  id: string;
  status: 'on-deposit';
  name: string;
  address: string;
  depositExpiryDate: string;
  moveInDate: string;
  tenantName: string;
}

export type Unit = UnitSetupMarketing | UnitOnSale | UnitOnDeposit;

export interface VacancyAlert {
  id: string;
  apartmentName: string;
  unitName: string;
  moveOutDate: string;
}

export interface StatusCount {
  vacant: number;
  onSale: number;
  upcoming: number;
  rented: number;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface OwnerData {
  id: string;
  name: string;
  supportInfo: {
    name: string;
    phone: string;
  };
  meetings: Meeting[];
  units: Unit[];
  vacancyAlerts: VacancyAlert[];
  statusCounts: StatusCount;
}

// Mock data for different owners
export const ownerDataMap: Record<string, OwnerData> = {
  "owner001": {
    id: "owner001",
    name: "Anh Minh Quang",
    supportInfo: {
      name: "Nguyễn Thị Mai",
      phone: "0901 234 567",
    },
    meetings: [
      {
        id: "1",
        date: "28/11",
        time: "09:00",
        renterName: "Trần Văn An",
        buildingName: "Sunrise City",
        unitNumber: "A-1205",
      },
      {
        id: "2",
        date: "28/11",
        time: "14:30",
        renterName: "Lê Thị Hương",
        buildingName: "Vinhomes Central",
        unitNumber: "T3-0812",
      },
      {
        id: "3",
        date: "29/11",
        time: "10:00",
        renterName: "Phạm Minh Tuấn",
        buildingName: "The Manor",
        unitNumber: "B-2301",
      },
      {
        id: "4",
        date: "30/11",
        time: "16:00",
        renterName: "Ngô Thanh Tâm",
        buildingName: "Masteri Thảo Điền",
        unitNumber: "T5-1102",
      },
      {
        id: "5",
        date: "01/12",
        time: "11:30",
        renterName: "Hoàng Văn Đức",
        buildingName: "Landmark 81",
        unitNumber: "L-4521",
      },
    ],
    units: [
      {
        id: "u1",
        status: 'setup-marketing',
        name: "Sunrise City A-1508",
        address: "23 Nguyễn Hữu Thọ, Q.7",
      },
      {
        id: "u2",
        status: 'on-sale',
        name: "Vinhomes T2-0915",
        address: "720 Điện Biên Phủ, Bình Thạnh",
        facebookPostUrl: "https://facebook.com/post/123",
        inquiries: 24,
        viewingRequests: 8,
      },
      {
        id: "u3",
        status: 'on-deposit',
        name: "The Manor B-1203",
        address: "91 Nguyễn Hữu Cảnh, Bình Thạnh",
        depositExpiryDate: "15/12/2024",
        moveInDate: "01/01/2025",
        tenantName: "Nguyễn Hoàng Long",
      },
      {
        id: "u4",
        status: 'on-sale',
        name: "Masteri T4-2201",
        address: "159 Xa lộ Hà Nội, Q.2",
        facebookPostUrl: "https://facebook.com/post/456",
        inquiries: 18,
        viewingRequests: 5,
      },
      {
        id: "u5",
        status: 'setup-marketing',
        name: "Landmark L-3105",
        address: "772 Điện Biên Phủ, Bình Thạnh",
      },
    ],
    vacancyAlerts: [
      {
        id: "v1",
        apartmentName: "Sunrise City",
        unitName: "A-0812",
        moveOutDate: "15/12/2024",
      },
      {
        id: "v2",
        apartmentName: "Vinhomes Central",
        unitName: "T1-1505",
        moveOutDate: "20/12/2024",
      },
      {
        id: "v3",
        apartmentName: "The Manor",
        unitName: "C-0901",
        moveOutDate: "31/12/2024",
      },
    ],
    statusCounts: {
      vacant: 3,
      onSale: 5,
      upcoming: 2,
      rented: 12,
    },
  },
  "owner002": {
    id: "owner002",
    name: "Chị Thu Hà",
    supportInfo: {
      name: "Trần Văn Bình",
      phone: "0912 345 678",
    },
    meetings: [
      {
        id: "1",
        date: "29/11",
        time: "10:00",
        renterName: "Lý Thanh Tùng",
        buildingName: "Saigon Pearl",
        unitNumber: "SP-1801",
      },
      {
        id: "2",
        date: "30/11",
        time: "15:00",
        renterName: "Võ Thị Lan",
        buildingName: "Saigon Pearl",
        unitNumber: "SP-2205",
      },
    ],
    units: [
      {
        id: "u1",
        status: 'on-sale',
        name: "Saigon Pearl SP-1801",
        address: "92 Nguyễn Hữu Cảnh, Bình Thạnh",
        facebookPostUrl: "https://facebook.com/post/789",
        inquiries: 12,
        viewingRequests: 3,
      },
      {
        id: "u2",
        status: 'on-deposit',
        name: "Saigon Pearl SP-2205",
        address: "92 Nguyễn Hữu Cảnh, Bình Thạnh",
        depositExpiryDate: "10/12/2024",
        moveInDate: "20/12/2024",
        tenantName: "Trần Minh Khoa",
      },
    ],
    vacancyAlerts: [
      {
        id: "v1",
        apartmentName: "Saigon Pearl",
        unitName: "SP-0912",
        moveOutDate: "25/12/2024",
      },
    ],
    statusCounts: {
      vacant: 1,
      onSale: 2,
      upcoming: 1,
      rented: 5,
    },
  },
};

// Default owner ID for demo
export const defaultOwnerId = "owner001";

// Function to get owner data by ID
export const getOwnerData = (ownerId: string): OwnerData | null => {
  return ownerDataMap[ownerId] || null;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Anh Minh Quang",
    content: "Lyfe giúp tôi quản lý 8 căn hộ dễ dàng hơn bao giờ hết. Tìm khách thuê chỉ trong 1 tuần!",
    rating: 5,
    avatar: "MQ",
  },
  {
    id: "t2",
    name: "Chị Thu Hà",
    content: "Đội ngũ chuyên nghiệp, hỗ trợ nhiệt tình 24/7. Căn hộ luôn được cho thuê với giá tốt nhất.",
    rating: 5,
    avatar: "TH",
  },
  {
    id: "t3",
    name: "Anh Đức Thành",
    content: "Từ khi sử dụng Lyfe, tôi không còn lo lắng về việc quản lý tài sản cho thuê nữa.",
    rating: 5,
    avatar: "ĐT",
  },
];

export const companyInfo = {
  leaderName: "Nguyễn Văn Hưng",
  leaderTitle: "Founder & CEO",
  description: "Với hơn 10 năm kinh nghiệm trong lĩnh vực bất động sản cho thuê, Lyfe cam kết mang đến giải pháp quản lý toàn diện và chuyên nghiệp nhất cho các chủ nhà tại Việt Nam.",
  experience: "10+ năm kinh nghiệm",
  properties: "500+ căn hộ quản lý",
  satisfaction: "98% khách hàng hài lòng",
};
