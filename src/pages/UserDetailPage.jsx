import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import Header from "../components/header";
import { getData } from "../services/api";
import { BaseCountryURL } from "../services/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/users";

const UserDetailPage = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.users);

  console.log(" redux countries", countries);

  useEffect(() => {
    const fetchData = async () => {
      const countries = await getData(BaseCountryURL);
      console.log({ countries });
      dispatch(fetchCountries(countries));
    };
    fetchData();
  }, []);

  const {
    state: { address, company, email, name },
  } = useLocation();
  // console.log(address, company, email);
  return (
    <div className="bg-green-900">
      UserDetailPage :{address.street}
      <p>{name}</p>
      <p>{email}</p>
      <Header countries={countries} />
    </div>
  );
};

export default UserDetailPage;
