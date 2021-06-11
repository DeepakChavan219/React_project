import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles({
  h1: {
    color: "red",
    marginLeft: 40,
    fontSize: 30,
  },
  h2: {
    color: "#A52A2A",
    marginLeft: 40,
    fontSize: 25,
    textDecoration: "underline",
  },
  span: {
    fontSize: 18,
    textAlign: "center",
    margin: 30,
    fontWeight: 700,
    // justifyContent: "center",
  },
  span1: {
    fontSize: 18,
    margin: "-10px 60px 20px 40px ",
    fontWeight: 700,
  },
});
const Home = () => {
  const classes = useStyle();
  return (
    <>
      <h1 className={classes.h1}>
        As inoculation programmes against COVID-19 begin, a checklist for better
        understanding
      </h1>
      <p className={classes.span}>
        THROUGHOUT our lives, we are exposed to a number of viruses, bacteria
        and other microbes. Some of these microbes benefit us while others cause
        diseases that could result in severe illness, disability or even death.
        Our body’s immune system protects us against several infections by
        triggering reactions that neutralize harmful microbes and prevent the
        infection. But it is unable to fight certain diseases like the novel
        Coronavirus. That is where vaccinations play a hugely important role, as
        in they help the immune system to create antibodies that protect the
        body from diseases.{" "}
      </p>
      <h2 className={classes.h2}>
        1. Effective protection from dangerous diseases and better health
      </h2>
      <p className={classes.span1}>
        Vaccines help build our body’s natural immunity to diseases and prevent
        us from falling ill. Children and adults can be protected from
        infections in the most effective way through a vaccination. The Centers
        for Disease Control and Prevention (CDC) in the US, for instance,
        recommends vaccinations throughout our life – including those to prevent
        influenza, hepatitis B and human papillomavirus (HPV).
      </p>
      <h2 className={classes.h2}>2. Safety and prevention</h2>
      <p className={classes.span1}>
        Typically, it takes many years to make a vaccine and put it through the
        mandatory trials before getting approval. Further, a vaccine is also
        monitored for any rare side effects while in use by the health
        regulatory agencies. But unusually in the case COVID-19, considering the
        havoc it is causing round the world, more than 50 vaccines are in
        development and up to nine have already been approved.
      </p>
      <h2 className={classes.h2}>3. Eradicating diseases and saving lives</h2>
      <p className={classes.span1}>
        Since smallpox and polio vaccines were introduced, these diseases have
        been eradicated almost completely from around the world. Vaccines for
        diseases like measles and diphtheria have been successful in reducing
        incidence by 99.9%. Vaccines prevent up to 3 million deaths worldwide
        every year.
      </p>
    </>
  );
};

export default Home;
