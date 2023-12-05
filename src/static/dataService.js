class DataService {
  constructor() {
    this.data = [
      {
        id: 1,
        parentId: null,
        taskNumber: 1,
        name: "Plan for Project Server 2013 deployment",
        duration: "1 day",
        predecessors: "",
        level: 1,
        resource: 1,
        cost: 100,
      },
      {
        id: 2,
        parentId: null,
        taskNumber: 2,
        name: "Prepare for deployment",
        duration: "4 days",
        predecessors: "1",
        level: 1,
        resource: null,
        cost: null,
      },
      {
        id: 3,
        parentId: 2,
        taskNumber: 3,
        name: "Create users and groups in the Active Directory service",
        duration: "1 day",
        predecessors: "",
        level: 2,
        resource: 1,
        cost: 200,
      },
      {
        id: 4,
        parentId: 2,
        taskNumber: 4,
        name: "Configure SQL Server and Analysis Services",
        duration: "3 days",
        predecessors: "3",
        level: 2,
        resource: null,
        cost: null,
      },
      {
        id: 5,
        parentId: 4,
        taskNumber: 5,
        name: "Configure SQL Server network settings",
        duration: "1 day",
        predecessors: "",
        level: 3,
        resource: 1,
        cost: 350,
      },
      {
        id: 6,
        parentId: 4,
        taskNumber: 6,
        name: "Configure Analysis Services for building Project Server OLAP cubes",
        duration: "1 day",
        predecessors: "5",
        level: 3,
        resource: 2,
        cost: 600,
      },
      {
        id: 7,
        parentId: 4,
        taskNumber: 7,
        name: "Create additional TempDB files",
        duration: "1 day",
        predecessors: "6",
        level: 3,
        resource: 1,
        cost: 100,
      },
      {
        id: 8,
        parentId: null,
        taskNumber: 8,
        name: "Install SharePoint Server 2013",
        duration: "5 days",
        predecessors: "2",
        level: 1,
        resource: null,
        cost: null,
      },
      {
        id: 9,
        parentId: 8,
        taskNumber: 9,
        name: "Prepare the farm servers",
        duration: "1 day",
        predecessors: "",
        level: 2,
        resource: 1,
        cost: 100,
      },
      {
        id: 10,
        parentId: 8,
        taskNumber: 10,
        name: "Install SharePoint 2013 on the farm servers",
        duration: "1 day",
        predecessors: "9",
        level: 2,
        resource: 3,
        cost: 1000,
      },
      {
        id: 11,
        parentId: 8,
        taskNumber: 11,
        name: "Create and configure the farm",
        duration: "1 day",
        predecessors: "10",
        level: 2,
        resource: 1,
        cost: 200,
      },
      {
        id: 12,
        parentId: 8,
        taskNumber: 12,
        name: "Add web servers to the farm",
        duration: "1 day",
        predecessors: "11",
        level: 2,
        resource: 2,
        cost: 200,
      },
      {
        id: 13,
        parentId: 8,
        taskNumber: 13,
        name: "Perform administrative tasks",
        duration: "1 day",
        predecessors: "12",
        level: 2,
        resource: 1,
        cost: 300,
      },
      {
        id: 14,
        parentId: null,
        taskNumber: 14,
        name: "Install and configure Project Server 2013",
        duration: "5 days",
        predecessors: "2,8",
        level: 1,
        resource: null,
        cost: null,
      },
      {
        id: 15,
        parentId: 14,
        taskNumber: 15,
        name: "Install Project Server 2013",
        duration: "1 day",
        predecessors: "",
        level: 2,
        resource: 1,
        cost: 500,
      },
      {
        id: 16,
        parentId: 14,
        taskNumber: 16,
        name: "Run the SharePoint Products and Technologies Configuration Wizard",
        duration: "1 day",
        predecessors: "15",
        level: 2,
        resource: 4,
        cost: 2000,
      },
      {
        id: 17,
        parentId: 14,
        taskNumber: 17,
        name: "Configure services",
        duration: "3 days",
        predecessors: "",
        level: 2,
        resource: null,
        cost: null,
      },
      {
        id: 18,
        parentId: 17,
        taskNumber: 18,
        name: "Start the Project Server Application Service",
        duration: "1 day",
        predecessors: "16",
        level: 3,
        resource: 1,
        cost: 300,
      },
      {
        id: 19,
        parentId: 17,
        taskNumber: 19,
        name: "Register a managed account",
        duration: "1 day",
        predecessors: "18",
        level: 3,
        resource: 2,
        cost: 1000,
      },
      {
        id: 20,
        parentId: 17,
        taskNumber: 20,
        name: "Create a Project Server service application",
        duration: "1 day",
        predecessors: "19",
        level: 3,
        resource: 1,
        cost: 100,
      },
      {
        id: 21,
        parentId: null,
        taskNumber: 21,
        name: "Create a Project Web App site",
        duration: "5 days",
        predecessors: "14",
        level: 1,
        resource: null,
        cost: null,
      },
      {
        id: 22,
        parentId: 21,
        taskNumber: 22,
        name: "Deploy Project Web App with a new site collection",
        duration: "2 days",
        predecessors: "",
        level: 2,
        resource: null,
        cost: null,
      },
      {
        id: 23,
        parentId: 22,
        taskNumber: 23,
        name: "Create a top-level Web site",
        duration: "1 day",
        predecessors: "",
        level: 3,
        resource: 2,
        cost: 2000,
      },
      {
        id: 24,
        parentId: 22,
        taskNumber: 24,
        name: "Create a Project Web App site",
        duration: "1 day",
        predecessors: "23",
        level: 3,
        resource: 1,
        cost: 200,
      },
      {
        id: 25,
        parentId: 21,
        taskNumber: 25,
        name: "Deploy Project Web App in an existing site collection",
        duration: "3 days",
        predecessors: "22",
        level: 2,
        resource: null,
        cost: null,
      },
      {
        id: 26,
        parentId: 25,
        taskNumber: 26,
        name: "Enable the Project Web App site collection features",
        duration: "2 days",
        predecessors: "",
        level: 3,
        resource: null,
        cost: null,
      },
      {
        id: 27,
        parentId: 26,
        taskNumber: 27,
        name: "Create a Project Web App database",
        duration: "1 day",
        predecessors: "",
        level: 4,
        resource: 3,
        cost: 500,
      },
      {
        id: 28,
        parentId: 26,
        taskNumber: 28,
        name: "Enable the Project Web App site collection features",
        duration: "1 day",
        predecessors: "27",
        level: 4,
        resource: 1,
        cost: 200,
      },
      {
        id: 29,
        parentId: 25,
        taskNumber: 29,
        name: "Create a Project Web App site in an existing site collection",
        duration: "1 day",
        predecessors: "26",
        level: 3,
        resource: 1,
        cost: 100,
      },
      {
        id: 30,
        parentId: null,
        taskNumber: 30,
        name: "Configure reporting for Project Web App",
        duration: "7 days",
        predecessors: "21",
        level: 1,
        resource: null,
        cost: null,
      },
      {
        id: 31,
        parentId: 30,
        taskNumber: 31,
        name: "Configure prerequisites",
        duration: "1 day",
        predecessors: "",
        level: 2,
        resource: 1,
        cost: 100,
      },
      {
        id: 32,
        parentId: 30,
        taskNumber: 32,
        name: "Accounts and security groups",
        duration: "1 day",
        predecessors: "31",
        level: 2,
        resource: 2,
        cost: 300,
      },
      {
        id: 33,
        parentId: 30,
        taskNumber: 33,
        name: "Add a login for the report authors group",
        duration: "1 day",
        predecessors: "32",
        level: 2,
        resource: 1,
        cost: 200,
      },
      {
        id: 34,
        parentId: 30,
        taskNumber: 34,
        name: "Install SQL Server 2008 Analysis Management Objects",
        duration: "1 day",
        predecessors: "33",
        level: 2,
        resource: 5,
        cost: 1500,
      },
      {
        id: 35,
        parentId: 30,
        taskNumber: 35,
        name: "Configure Excel Services settings",
        duration: "1 day",
        predecessors: "34",
        level: 2,
        resource: 1,
        cost: 200,
      },
      {
        id: 36,
        parentId: 30,
        taskNumber: 36,
        name: "Configure Secure Store Service settings",
        duration: "1 day",
        predecessors: "35",
        level: 2,
        resource: 2,
        cost: 100,
      },
      {
        id: 37,
        parentId: 30,
        taskNumber: 37,
        name: "Populate the Report Authors and Report Viewers Active Directory groups",
        duration: "1 day",
        predecessors: "36",
        level: 2,
        resource: 3,
        cost: 100,
      },
    ];
  }

  getData() {
    return this.data;
  }

  getDataByNumber = (n) => this.getData().splice(0, n);
}

export default new DataService();
