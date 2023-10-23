import { ApexOptions } from "apexcharts";
import moment from "moment";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const dummyDataSeries = [
  {
    name: "Actual",
    data: [
      {
        x: "Murabito A",
        y: [1698055210133, 1698060680133],
        label: "This is special Label A",
      },
    ],
  },
  {
    name: "Plan",
    data: [
      {
        x: "Murabito A",
        y: [1698055210133, 1698060680133],
        label: "Adult Swim 2025",
      },
      {
        x: "Murabito B",
        y: [1698062442976, 1698072593976],
        label: "Praise the Lord, Break the law.",
      },
    ],
  },
];

function App() {
  const options: ApexOptions = {
    chart: {
      height: 450,
      type: "rangeBar",
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    xaxis: {
      type: "datetime",
      tickPlacement: "on",
      labels: {
        datetimeUTC: false,
      },
    },
    stroke: {
      width: 1,
    },
    fill: {
      type: "solid",
      opacity: 0.8,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      enabled: true,
      y: {
        formatter(val, opts: any) {
          // --Test 1
          const date = moment(val).format("DD/MMM HH:mm");
          // console.log({ date });

          // --Test 2
          // const hardCodeDate = "23/Oct 21:49";
          // const testData = {
          //   isEqual: date === hardCodeDate, // i dont think soo
          //   date,
          //   hardCodeDate,
          // };
          // console.log(testData);

          // -- Test 3
          return date;
          // -- Test 4
          // return hardCodeDate;
          // -- Test 5
          // return hardCodeDate + " " + date;
          // -- Test 6
          // return testData.isEqual + " " + "Look console";
          // -- Test 7
          // return date.toString();
          // -- Test 8
          // return JSON.parse(JSON.stringify(date)).toString();
          // -- Test 8
          // return date.split(" ")[1]; // Takes the HH:mm

          // -- Test 9
          // const H = date.split(" ")[1].split(":"); // Takes the HH:mm
          // const hour = H[0];
          // const minutes = H[1];
          // console.info({hour, minutes})
          // return `${hour} ${minutes} | ${parseFloat(hour)} ${parseFloat(
          //   minutes
          // )} |  ${JSON.stringify(parseFloat(hour.toString()))} ${JSON.stringify(
          //   parseFloat(minutes.toString())
          // )}`;

          // -- Test 10
          // const H = date.split(" ")[1].split(":"); // Takes the HH:mm
          // let hour = 0;
          // let minutes = 0;
          //
          // while (hour !== parseInt(H[0])) {
          //   ++hour;
          // }
          //
          // while (minutes !== parseInt(H[1])) {
          //   ++minutes;
          // }
          //
          // console.info({ hour, minutes });
          // return hour;
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: { fontWeight: "bold", fontSize: "12px" },
      formatter(val: any, opts: any) {
        const curlabel =
          opts?.w?.config?.series?.[opts?.seriesIndex]?.data?.[
            opts?.dataPointIndex
          ]?.label;
        return curlabel;
      },
    },
  };
  return (
    <>
      <ReactApexChart
        options={options}
        series={dummyDataSeries}
        type="rangeBar"
        height={350}
      />
    </>
  );
}

export default App;
