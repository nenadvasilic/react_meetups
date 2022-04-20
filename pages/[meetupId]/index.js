import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/6/6d/Nis_center.JPG"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="A meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Nis_center.JPG",
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5, Some City",
        description: "A meetup description",
      },
    },
  };
}

export default MeetupDetails;
