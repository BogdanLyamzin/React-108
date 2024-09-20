import styles from "./Profile.module.css";

const Profile = (props) => {
  const {  name, phone, email, status, hasPhysicalAddress = false } = props;

  return (
    <div>
      <h2 className={styles.title}>My profile</h2>
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status}</p>
      <p>Has physical address: {hasPhysicalAddress ? "Yes" : "No"}</p>
    </div>
  );
};

export default Profile;
