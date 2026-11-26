"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/ui/BrandLogo";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <div className={styles.topBar} data-hidden={scrolled}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLinks}>
            <a href={`tel:${company.phone.office.replace(/[^\d+]/g, "")}`}>
              <Icon name="phone" size={14} />
              {company.phone.office}
            </a>
            <a
              href={`https://wa.me/${company.phone.mobile.replace(/[^\d]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="message-circle" size={14} />
              WhatsApp
            </a>
          </div>
          <span className={styles.topBarMeta}>
            <Icon name="clock" size={14} />
            {company.workingHours}
          </span>
        </div>
      </div>

      <header className={styles.header} data-scrolled={scrolled}>
        <div className={`container ${styles.inner}`}>
          <BrandLogo />

          <nav className={styles.nav} aria-label="Primary">
            {mainNav.map((item) => (
              <div className={styles.navItem} key={item.label}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.megaMenu ? <Icon name="chevron-down" size={15} /> : null}
                </Link>
                {item.megaMenu ? (
                  <div className={styles.mega}>
                    <p className={styles.megaDescription}>{item.megaMenu.description}</p>
                    <div className={styles.megaGrid}>
                      {item.megaMenu.items.map((mi) => (
                        <Link href={mi.href} className={styles.megaItem} key={mi.label}>
                          <span className={styles.megaIcon}>
                            <Icon name={mi.icon} size={18} />
                          </span>
                          <span>
                            <span className={styles.megaItemTitle}>{mi.label}</span>
                            <span className={styles.megaItemDesc}>{mi.description}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className={styles.megaFooter}>
                      <Button href={item.megaMenu.viewAll.href} variant="link" size="sm">
                        {item.megaMenu.viewAll.label}
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className={styles.actions}>
            <a href={`tel:${company.phone.office.replace(/[^\d+]/g, "")}`} className={styles.phoneAction}>
              <Icon name="phone" size={17} />
              {company.phone.office}
            </a>
            <div className={styles.quoteBtn}>
              <Button href="/contact" size="sm">
                Get a Quote
              </Button>
            </div>
            <button
              type="button"
              className={styles.menuToggle}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className={styles.mobileOverlay} data-open={mobileOpen} role="dialog" aria-modal="true">
        <div className={`container ${styles.mobileHeader}`}>
          <BrandLogo showSub={false} onClick={() => setMobileOpen(false)} />
          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <Icon name="x" size={20} />
          </button>
        </div>

        <div className={`container ${styles.mobileScroll}`}>
          {mainNav.map((item) => {
            if (!item.megaMenu) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={styles.mobileSimpleLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }
            const open = openGroup === item.label;
            return (
              <div className={styles.mobileGroup} data-open={open} key={item.label}>
                <button
                  type="button"
                  className={styles.mobileGroupTrigger}
                  aria-expanded={open}
                  onClick={() => setOpenGroup(open ? null : item.label)}
                >
                  {item.label}
                  <Icon name="chevron-down" size={18} />
                </button>
                <div className={styles.mobilePanel}>
                  <div className={styles.mobilePanelInner}>
                    {item.megaMenu.items.map((mi) => (
                      <Link
                        key={mi.label}
                        href={mi.href}
                        className={styles.mobileSubLink}
                        onClick={() => setMobileOpen(false)}
                      >
                        {mi.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.mobileFooter}>
          <Button href="/contact" full onClick={() => setMobileOpen(false)}>
            Get a Quote
          </Button>
          <Button href={`tel:${company.phone.office.replace(/[^\d+]/g, "")}`} variant="secondary" full showIcon={false}>
            Call {company.phone.office}
          </Button>
        </div>
      </div>
    </>
  );
}
