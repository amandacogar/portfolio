import React from "react";
import { Table } from "react-bootstrap";

function HowItWorks() {
  return (
    <>
      <section name={"how-it-works"} id="how-it-works" className="section">
        <div id="how-container">
          <Table borderless id="table">
            <thead>
              <tr>
                <th id="how-header">How It Works</th>
              </tr>
            </thead>
            <tbody>
              <tr className="process">
                <td className="icon">
                  <i class="fas fa-calendar-alt"></i>
                </td>
                <td className="step">
                  Schedule a free consultation to discuss your business, goals,
                  and ideas.
                </td>
              </tr>
              <tr className="process">
                <td className="icon">
                  <i class="fas fa-clipboard-list"></i>
                </td>
                <td className="step">
                  Review and approve the project estimate, agreed objectives,
                  and service contract.
                </td>
              </tr>
              <tr className="process">
                <td className="icon">
                  <i class="fas fa-money-check-alt"></i>
                </td>
                <td className="step">Pay initial project deposit.</td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-laptop-code"></i>
                </td>
                <td className="step">
                  Wait for your ideas to be coded to life...
                </td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-edit"></i>
                </td>
                <td className="step">
                  Review the first draft of your website. Tweak, edit, remove or
                  add any finishing touches.
                </td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-clock"></i>
                </td>
                <td className="step">Wait just a little bit longer...</td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-check-circle"></i>
                </td>
                <td className="step">Approve final draft.</td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-file-invoice-dollar"></i>
                </td>
                <td className="step">
                  Receive your invoice and pay your bill conveniently online.
                </td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-rocket"></i>
                </td>
                <td className="step">Launch your website!</td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-chart-line"></i>
                </td>
                <td className="step">Monitor site performance.</td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-tools"></i>
                </td>
                <td className="step">
                  Keep in touch for free website maintenance.
                </td>
              </tr>
              <tr class="process">
                <td className="icon">
                  <i class="fas fa-thumbs-up"></i>
                </td>
                <td td className="step">
                  Write a review and tell your friends!
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
